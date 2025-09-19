# D&D Theme Installation Guide

## Method 1: Manual Installation (.vsix file)

1. **Download the extension package**: You should have a file called `dnd-theme-1.0.0.vsix`

2. **Install in VS Code**:
   - Open VS Code
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette
   - Type: `Extensions: Install from VSIX...`
   - Select the `dnd-theme-1.0.0.vsix` file
   - Click "Install"

3. **Activate the Color Theme**:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type: `Preferences: Color Theme`
   - Select "D&D Dark"

4. **Activate the Icon Theme**:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type: `Preferences: File Icon Theme`
   - Select "D&D Icons"

## Method 2: Development Installation

If you want to work on the theme or install it from source:

1. **Clone or download the source code**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Package the extension**:
   ```bash
   npx vsce package
   ```
4. **Install the generated .vsix file** (follow Method 1 steps 2-4)

## Method 3: Development Mode

To test during development:

1. **Open the theme folder in VS Code**
2. **Press F5** to open a new Extension Development Host window
3. **In the new window, apply the themes** as described in Method 1 steps 3-4

## Troubleshooting

- **Icons not showing**: Make sure you've activated both the color theme AND the icon theme
- **Colors look wrong**: Ensure you selected "D&D Dark" and not another dark theme
- **Extension not working**: Try reloading VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"

## Uninstallation

1. Go to Extensions panel (`Ctrl+Shift+X`)
2. Find "D&D Theme"
3. Click the gear icon and select "Uninstall"

## Customization

You can modify the theme by editing:
- `themes/dnd-dark-color-theme.json` for colors
- `icons/dnd-icon-theme.json` for icon mappings
- Add new SVG icons to the `icons/` folder

After making changes, repackage with `npx vsce package`.