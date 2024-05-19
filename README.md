# MPV Electron

This is a minimal example of using libmpv inside of Electron via FFI.

# Quick Start 
```
pnpm install
```
Ensure `libmpv-2.dll` is inside `src/mpv` directory OR modify `PATH_TO_LIB` in `src/mpv/index.js` to point toward shared library.
```
pnpm start
```