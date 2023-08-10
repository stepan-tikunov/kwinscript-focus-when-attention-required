workspace.clientDemandsAttentionChanged.connect((client, set) => {
    if (set) {
        workspace.activeClient = client;
    }
});
