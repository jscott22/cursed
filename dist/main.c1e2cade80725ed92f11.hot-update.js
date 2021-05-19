self["webpackHotUpdateplaceholder"]("main",{

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "curse": () => (/* binding */ curse)
/* harmony export */ });
async function setTargetingFlag(targetId, curserId, curse) {
    // TODO: get HERE")
    if (canvas instanceof Canvas) {
        const target = canvas.tokens.get(targetId).actor;
        const curser = canvas.tokens.get(curserId).actor;
        console.log(`Target is ${target.name}; Id is: ${targetId}`);
        console.log(`Curser is ${curser.name}; Id is: ${curserId}`);
        console.log(`Curse is ${curse}`);
        const flag = curser.getFlag('cursed', curse);
        const prevTargetList = flag || [];
        let nextTargetList;
        if (prevTargetList.includes(targetId)) {
            console.log('Already targeting target, removing curse');
            nextTargetList = prevTargetList.filter(t => t !== targetId);
        }
        else {
            console.log('Adding target to list');
            nextTargetList = [...prevTargetList, targetId];
        }
        await curser.setFlag('cursed', curse, nextTargetList);
    }
}
async function curse(curse) {
    var _a;
    const user = game.user;
    const targets = (user === null || user === void 0 ? void 0 : user.targets) ? Array.from(user.targets) : [];
    // TODO: Make sure this is the best way to do this;
    const selectedId = ChatMessage.getSpeaker().token;
    if (!selectedId) {
        return (_a = ui.notifications) === null || _a === void 0 ? void 0 : _a.error('Please select a token');
    }
    for (const target of targets) {
        console.log("TARGET: ", target);
        await setTargetingFlag(target.id, selectedId, curse);
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7070869f1a269c7cb0ef")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy90ZXN0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsS0FBSyxVQUFVLGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO0lBQzdFLG1CQUFtQjtJQUNuQixJQUFJLE1BQU0sWUFBWSxNQUFNLEVBQUU7UUFDMUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsTUFBTSxDQUFDLElBQUksWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxNQUFNLENBQUMsSUFBSSxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFakMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUF5QixDQUFDO1FBRXJFLE1BQU0sY0FBYyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFbEMsSUFBSSxjQUF3QixDQUFDO1FBRTdCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDeEQsY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUVELE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQztLQUN4RDtBQUNMLENBQUM7QUFFTSxLQUFLLFVBQVUsS0FBSyxDQUFDLEtBQWE7O0lBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdkIsTUFBTSxPQUFPLEdBQUcsS0FBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5RCxtREFBbUQ7SUFDbkQsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUVsRCxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2IsT0FBTyxRQUFFLENBQUMsYUFBYSwwQ0FBRSxLQUFLLENBQUMsdUJBQXVCLENBQUM7S0FDMUQ7SUFFRCxLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxNQUFNLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQztLQUN2RDtBQUNMLENBQUM7Ozs7Ozs7Ozs7O1VDekNELHNEIiwiZmlsZSI6Im1haW4uYzFlMmNhZGU4MDcyNWVkOTJmMTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIHNldFRhcmdldGluZ0ZsYWcodGFyZ2V0SWQ6IHN0cmluZywgY3Vyc2VySWQ6IHN0cmluZywgY3Vyc2U6IHN0cmluZykge1xuICAgIC8vIFRPRE86IGdldCBIRVJFXCIpXG4gICAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIENhbnZhcykge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBjYW52YXMudG9rZW5zLmdldCh0YXJnZXRJZCkuYWN0b3I7XG4gICAgICAgIGNvbnN0IGN1cnNlciA9IGNhbnZhcy50b2tlbnMuZ2V0KGN1cnNlcklkKS5hY3RvcjtcbiAgICAgICAgY29uc29sZS5sb2coYFRhcmdldCBpcyAke3RhcmdldC5uYW1lfTsgSWQgaXM6ICR7dGFyZ2V0SWR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJzZXIgaXMgJHtjdXJzZXIubmFtZX07IElkIGlzOiAke2N1cnNlcklkfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ3Vyc2UgaXMgJHtjdXJzZX1gKTtcblxuICAgICAgICBjb25zdCBmbGFnID0gY3Vyc2VyLmdldEZsYWcoJ2N1cnNlZCcsIGN1cnNlKSBhcyBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zdCBwcmV2VGFyZ2V0TGlzdCA9IGZsYWcgfHwgW107XG5cbiAgICAgICAgbGV0IG5leHRUYXJnZXRMaXN0OiBzdHJpbmdbXTtcblxuICAgICAgICBpZiAocHJldlRhcmdldExpc3QuaW5jbHVkZXModGFyZ2V0SWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSB0YXJnZXRpbmcgdGFyZ2V0LCByZW1vdmluZyBjdXJzZScpO1xuICAgICAgICAgICAgbmV4dFRhcmdldExpc3QgPSBwcmV2VGFyZ2V0TGlzdC5maWx0ZXIodCA9PiB0ICE9PSB0YXJnZXRJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIHRhcmdldCB0byBsaXN0Jyk7XG4gICAgICAgICAgICBuZXh0VGFyZ2V0TGlzdCA9IFsuLi5wcmV2VGFyZ2V0TGlzdCwgdGFyZ2V0SWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgY3Vyc2VyLnNldEZsYWcoJ2N1cnNlZCcsIGN1cnNlLCBuZXh0VGFyZ2V0TGlzdClcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjdXJzZShjdXJzZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdXNlciA9IGdhbWUudXNlcjtcbiAgICBjb25zdCB0YXJnZXRzID0gdXNlcj8udGFyZ2V0cyA/IEFycmF5LmZyb20odXNlci50YXJnZXRzKSA6IFtdO1xuICAgIC8vIFRPRE86IE1ha2Ugc3VyZSB0aGlzIGlzIHRoZSBiZXN0IHdheSB0byBkbyB0aGlzO1xuICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBDaGF0TWVzc2FnZS5nZXRTcGVha2VyKCkudG9rZW47XG5cbiAgICBpZiAoIXNlbGVjdGVkSWQpIHtcbiAgICAgICAgcmV0dXJuIHVpLm5vdGlmaWNhdGlvbnM/LmVycm9yKCdQbGVhc2Ugc2VsZWN0IGEgdG9rZW4nKVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIHRhcmdldHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUQVJHRVQ6IFwiLCB0YXJnZXQpO1xuICAgICAgICBhd2FpdCBzZXRUYXJnZXRpbmdGbGFnKHRhcmdldC5pZCwgc2VsZWN0ZWRJZCwgY3Vyc2UpXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjcwNzA4NjlmMWEyNjljN2NiMGVmXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==