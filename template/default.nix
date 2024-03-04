{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/refs/tags/22.11.tar.gz") {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_18
    pkgs.yarn
  ];
}