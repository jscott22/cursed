async function setTargetingFlag(targetId: string, curserId: string, curse: string) {
    // TODO: get HERE")
    if (canvas instanceof Canvas) {
        const target = canvas.tokens.get(targetId).actor;
        const curser = canvas.tokens.get(curserId).actor;
        console.log(`Target is ${target.name}; Id is: ${targetId}`);
        console.log(`Curser is ${curser.name}; Id is: ${curserId}`);
        console.log(`Curse is ${curse}`);

        const flag = curser.getFlag('cursed', curse) as string[] | undefined;

        const prevTargetList = flag || [];

        let nextTargetList: string[];

        if (prevTargetList.includes(targetId)) {
            console.log('Already targeting target, removing curse');
            nextTargetList = prevTargetList.filter(t => t !== targetId);
        } else {
            console.log('Adding target to list');
            nextTargetList = [...prevTargetList, targetId];
        }

        await curser.setFlag('cursed', curse, nextTargetList)
    }
}

export async function curse(curse: string) {
    const user = game.user;
    const targets = user?.targets ? Array.from(user.targets) : [];
    // TODO: Make sure this is the best way to do this;
    const selectedId = ChatMessage.getSpeaker().token;

    if (!selectedId) {
        return ui.notifications?.error('Please select a token')
    }

    for (const target of targets) {
        console.log("TARGET: ", target);
        await setTargetingFlag(target.id, selectedId, curse)
    }
}