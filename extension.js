// D&D Theme Extension
// This extension provides fantasy-themed colors and icons for VS Code

const vscode = require('vscode');

function activate(context) {
    console.log('🐉 D&D Theme extension is now active! Roll for initiative! 🎲');
    
    // Optional: Show a welcome message when the extension is first activated
    const config = vscode.workspace.getConfiguration('dnd-theme');
    const showWelcome = config.get('showWelcomeMessage', true);
    
    if (showWelcome) {
        vscode.window.showInformationMessage(
            '🐉 Welcome to the D&D Theme! ⚔️ Your coding adventure begins now! May your code be bug-free and your builds successful! 🎲',
            'Apply D&D Theme',
            'Apply D&D Icons',
            'Don\'t show again'
        ).then(selection => {
            if (selection === 'Apply D&D Theme') {
                vscode.commands.executeCommand('workbench.action.selectTheme');
            } else if (selection === 'Apply D&D Icons') {
                vscode.commands.executeCommand('workbench.action.selectIconTheme');
            } else if (selection === 'Don\'t show again') {
                config.update('showWelcomeMessage', false, vscode.ConfigurationTarget.Global);
            }
        });
    }

    // Register a command for quick theme switching
    let disposable = vscode.commands.registerCommand('dnd-theme.applyTheme', () => {
        vscode.window.showInformationMessage('🎲 Rolling for theme application... Natural 20! Theme applied successfully! ⚔️');
        vscode.commands.executeCommand('workbench.action.selectTheme');
    });

    context.subscriptions.push(disposable);

    // Add status bar item with D&D flavor
    let statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.text = "🐉 D&D";
    statusBarItem.tooltip = "D&D Theme Active - May your code be legendary!";
    statusBarItem.command = 'dnd-theme.applyTheme';
    statusBarItem.show();

    context.subscriptions.push(statusBarItem);
}

function deactivate() {
    console.log('🐉 D&D Theme extension is now deactivated. Until next adventure! ⚔️');
}

module.exports = {
    activate,
    deactivate
};