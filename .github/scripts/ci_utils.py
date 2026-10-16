#!/usr/bin/env python3
import argparse
import json
import sys
from pathlib import Path


RELEASE_LABELS = ("release-mayor", "release-minor", "release-patch")


def load_json(path_str: str) -> dict:
    with Path(path_str).open(encoding="utf-8") as handle:
        return json.load(handle)


def write_json(path_str: str, payload: dict) -> None:
    with Path(path_str).open("w", encoding="utf-8", newline="\n") as handle:
        json.dump(payload, handle, indent=2)
        handle.write("\n")


def normalize_semver(version: str) -> str:
    return version.strip().removeprefix("v")


def parse_semver(version: str) -> tuple[int, int, int]:
    parts = normalize_semver(version).split(".")
    if len(parts) != 3 or not all(part.isdigit() for part in parts):
        raise ValueError(f"Unsupported semantic version: {version}")
    return tuple(map(int, parts))


def bump_semver(version: str, release_label: str) -> str:
    major, minor, patch = parse_semver(version)
    if release_label == "release-mayor":
        return f"{major + 1}.0.0"
    if release_label == "release-minor":
        return f"{major}.{minor + 1}.0"
    if release_label == "release-patch":
        return f"{major}.{minor}.{patch + 1}"
    raise ValueError(f"Unsupported release label: {release_label}")


def emit(payload: dict[str, str]) -> None:
    for key, value in payload.items():
        print(f"{key}={value}")


def detect_release_label(labels_json: str) -> dict[str, str]:
    labels = sorted(label for label in json.loads(labels_json) if label in RELEASE_LABELS)
    status = "valid" if len(labels) == 1 else "missing" if not labels else "invalid"
    return {"status": status, "label": labels[0] if len(labels) == 1 else "", "release_labels": json.dumps(labels)}


def sync_project_version(version: str, package_json_path: str, package_lock_path: str) -> list[str]:
    version = normalize_semver(version)
    parse_semver(version)
    changed = []
    package_json = load_json(package_json_path)
    if package_json.get("version") != version:
        package_json["version"] = version
        write_json(package_json_path, package_json)
        changed.append(package_json_path)
    package_lock = Path(package_lock_path)
    if package_lock.exists():
        lock = load_json(package_lock_path)
        updated = lock.get("version") != version
        lock["version"] = version
        root = lock.get("packages", {}).get("")
        if isinstance(root, dict) and root.get("version") != version:
            root["version"] = version
            updated = True
        if updated:
            write_json(package_lock_path, lock)
            changed.append(package_lock_path)
    return changed


def main() -> int:
    parser = argparse.ArgumentParser()
    commands = parser.add_subparsers(dest="command", required=True)
    detect = commands.add_parser("detect-release-label")
    detect.add_argument("--labels-json", required=True)
    commands.add_parser("read-version").add_argument("--package-json", default="package.json")
    bump = commands.add_parser("bump-version")
    bump.add_argument("--version", required=True)
    bump.add_argument("--release-label", choices=RELEASE_LABELS, required=True)
    sync = commands.add_parser("sync-version")
    sync.add_argument("--version", required=True)
    sync.add_argument("--package-json", default="package.json")
    sync.add_argument("--package-lock", default="package-lock.json")
    args = parser.parse_args()
    try:
        if args.command == "detect-release-label":
            emit(detect_release_label(args.labels_json))
        elif args.command == "read-version":
            version = load_json(args.package_json).get("version")
            if not isinstance(version, str):
                raise ValueError(f"No string version found in {args.package_json}")
            parse_semver(version)
            emit({"version": version})
        elif args.command == "bump-version":
            emit({"version": bump_semver(args.version, args.release_label)})
        else:
            changed = sync_project_version(args.version, args.package_json, args.package_lock)
            emit({"version": args.version, "changed": str(bool(changed)).lower(), "changed_files": json.dumps(changed)})
    except Exception as exc:
        print(str(exc), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
