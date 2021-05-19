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
async function setFlag(targetId, curserId, curse) {
    // TODO: get rid of this
    console.log("HERE");
    if (canvas instanceof Canvas) {
        const target = canvas.tokens.get(targetId).actor;
        const curser = canvas.tokens.get(curserId).actor;
        console.log(`Target is ${target.name}; Id is: ${targetId}`);
        console.log(`Curser is ${curser.name}; Id is: ${curserId}`);
        console.log(`Curse is ${curse}`);
    }
}
async function curse(curse) {
    var _a;
    const user = game.user;
    const targets = (user === null || user === void 0 ? void 0 : user.targets) ? Array.from(user.targets) : [];
    console.log("TARGETS: ", targets);
    // TODO: Make sure this is the best way to do this;
    const selectedId = ChatMessage.getSpeaker().token;
    console.log("USER: ", user);
    console.log("SELECTED ID: ", selectedId);
    if (!selectedId) {
        return (_a = ui.notifications) === null || _a === void 0 ? void 0 : _a.error('Please select a token');
    }
    console.log("HERE2");
    for (const target in targets) {
        console.log("TARGET: ", target);
        await setFlag(target.id, selectedId, curse);
    }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("43593b59b6c774209c4c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy90ZXN0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsS0FBSyxVQUFVLE9BQU8sQ0FBQyxRQUFnQixFQUFFLFFBQWdCLEVBQUUsS0FBYTtJQUNwRSx3QkFBd0I7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDbkIsSUFBSSxNQUFNLFlBQVksTUFBTSxFQUFFO1FBQzFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLE1BQU0sQ0FBQyxJQUFJLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsTUFBTSxDQUFDLElBQUksWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQ3BDO0FBRUwsQ0FBQztBQUVNLEtBQUssVUFBVSxLQUFLLENBQUMsS0FBYTs7SUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2QixNQUFNLE9BQU8sR0FBRyxLQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQztJQUNqQyxtREFBbUQ7SUFDbkQsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUVsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV6QyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2IsT0FBTyxRQUFFLENBQUMsYUFBYSwwQ0FBRSxLQUFLLENBQUMsdUJBQXVCLENBQUM7S0FDMUQ7SUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUVwQixLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUM7S0FDOUM7QUFDTCxDQUFDOzs7Ozs7Ozs7OztVQ2pDRCxzRCIsImZpbGUiOiJtYWluLjExY2FmMTEwZmQ5NjQyMjBjYWY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBzZXRGbGFnKHRhcmdldElkOiBzdHJpbmcsIGN1cnNlcklkOiBzdHJpbmcsIGN1cnNlOiBzdHJpbmcpIHtcbiAgICAvLyBUT0RPOiBnZXQgcmlkIG9mIHRoaXNcbiAgICBjb25zb2xlLmxvZyhcIkhFUkVcIilcbiAgICBpZiAoY2FudmFzIGluc3RhbmNlb2YgQ2FudmFzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGNhbnZhcy50b2tlbnMuZ2V0KHRhcmdldElkKS5hY3RvcjtcbiAgICAgICAgY29uc3QgY3Vyc2VyID0gY2FudmFzLnRva2Vucy5nZXQoY3Vyc2VySWQpLmFjdG9yO1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFyZ2V0IGlzICR7dGFyZ2V0Lm5hbWV9OyBJZCBpczogJHt0YXJnZXRJZH1gKTtcbiAgICAgICAgY29uc29sZS5sb2coYEN1cnNlciBpcyAke2N1cnNlci5uYW1lfTsgSWQgaXM6ICR7Y3Vyc2VySWR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJzZSBpcyAke2N1cnNlfWApO1xuICAgIH1cblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3Vyc2UoY3Vyc2U6IHN0cmluZykge1xuICAgIGNvbnN0IHVzZXIgPSBnYW1lLnVzZXI7XG4gICAgY29uc3QgdGFyZ2V0cyA9IHVzZXI/LnRhcmdldHMgPyBBcnJheS5mcm9tKHVzZXIudGFyZ2V0cykgOiBbXTtcbiAgICBjb25zb2xlLmxvZyhcIlRBUkdFVFM6IFwiLCB0YXJnZXRzKVxuICAgIC8vIFRPRE86IE1ha2Ugc3VyZSB0aGlzIGlzIHRoZSBiZXN0IHdheSB0byBkbyB0aGlzO1xuICAgIGNvbnN0IHNlbGVjdGVkSWQgPSBDaGF0TWVzc2FnZS5nZXRTcGVha2VyKCkudG9rZW47XG5cbiAgICBjb25zb2xlLmxvZyhcIlVTRVI6IFwiLCB1c2VyKTtcbiAgICBjb25zb2xlLmxvZyhcIlNFTEVDVEVEIElEOiBcIiwgc2VsZWN0ZWRJZCk7XG5cbiAgICBpZiAoIXNlbGVjdGVkSWQpIHtcbiAgICAgICAgcmV0dXJuIHVpLm5vdGlmaWNhdGlvbnM/LmVycm9yKCdQbGVhc2Ugc2VsZWN0IGEgdG9rZW4nKVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiSEVSRTJcIilcblxuICAgIGZvciAoY29uc3QgdGFyZ2V0IGluIHRhcmdldHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUQVJHRVQ6IFwiLCB0YXJnZXQpO1xuICAgICAgICBhd2FpdCBzZXRGbGFnKHRhcmdldC5pZCwgc2VsZWN0ZWRJZCwgY3Vyc2UpXG4gICAgfVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQzNTkzYjU5YjZjNzc0MjA5YzRjXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==