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
    // TODO: get rid of this
    console.log("HERE");
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
        if (list) {
            if (list.includes(target.id)) {
            }
        }
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
/******/ 	__webpack_require__.h = () => ("c1e2cade80725ed92f11")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy90ZXN0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsS0FBSyxVQUFVLGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxLQUFhO0lBQzdFLHdCQUF3QjtJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUNuQixJQUFJLE1BQU0sWUFBWSxNQUFNLEVBQUU7UUFDMUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsTUFBTSxDQUFDLElBQUksWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxNQUFNLENBQUMsSUFBSSxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFakMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUF5QixDQUFDO1FBRXJFLE1BQU0sY0FBYyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFFbEMsSUFBSSxjQUF3QixDQUFDO1FBRTdCLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDeEQsY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxjQUFjLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUVELE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQztRQUdyRCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7YUFFN0I7U0FDSjtLQUNKO0FBQ0wsQ0FBQztBQUVNLEtBQUssVUFBVSxLQUFLLENBQUMsS0FBYTs7SUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2QixNQUFNLE9BQU8sR0FBRyxLQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlELG1EQUFtRDtJQUNuRCxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDO0lBRWxELElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDYixPQUFPLFFBQUUsQ0FBQyxhQUFhLDBDQUFFLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztLQUMxRDtJQUVELEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDO0tBQ3ZEO0FBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7VUNqREQsc0QiLCJmaWxlIjoibWFpbi5lNjhhNzE4NWFiY2FmNmJkNjkxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gc2V0VGFyZ2V0aW5nRmxhZyh0YXJnZXRJZDogc3RyaW5nLCBjdXJzZXJJZDogc3RyaW5nLCBjdXJzZTogc3RyaW5nKSB7XG4gICAgLy8gVE9ETzogZ2V0IHJpZCBvZiB0aGlzXG4gICAgY29uc29sZS5sb2coXCJIRVJFXCIpXG4gICAgaWYgKGNhbnZhcyBpbnN0YW5jZW9mIENhbnZhcykge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBjYW52YXMudG9rZW5zLmdldCh0YXJnZXRJZCkuYWN0b3I7XG4gICAgICAgIGNvbnN0IGN1cnNlciA9IGNhbnZhcy50b2tlbnMuZ2V0KGN1cnNlcklkKS5hY3RvcjtcbiAgICAgICAgY29uc29sZS5sb2coYFRhcmdldCBpcyAke3RhcmdldC5uYW1lfTsgSWQgaXM6ICR7dGFyZ2V0SWR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJzZXIgaXMgJHtjdXJzZXIubmFtZX07IElkIGlzOiAke2N1cnNlcklkfWApO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ3Vyc2UgaXMgJHtjdXJzZX1gKTtcblxuICAgICAgICBjb25zdCBmbGFnID0gY3Vyc2VyLmdldEZsYWcoJ2N1cnNlZCcsIGN1cnNlKSBhcyBzdHJpbmdbXSB8IHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zdCBwcmV2VGFyZ2V0TGlzdCA9IGZsYWcgfHwgW107XG5cbiAgICAgICAgbGV0IG5leHRUYXJnZXRMaXN0OiBzdHJpbmdbXTtcblxuICAgICAgICBpZiAocHJldlRhcmdldExpc3QuaW5jbHVkZXModGFyZ2V0SWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWxyZWFkeSB0YXJnZXRpbmcgdGFyZ2V0LCByZW1vdmluZyBjdXJzZScpO1xuICAgICAgICAgICAgbmV4dFRhcmdldExpc3QgPSBwcmV2VGFyZ2V0TGlzdC5maWx0ZXIodCA9PiB0ICE9PSB0YXJnZXRJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIHRhcmdldCB0byBsaXN0Jyk7XG4gICAgICAgICAgICBuZXh0VGFyZ2V0TGlzdCA9IFsuLi5wcmV2VGFyZ2V0TGlzdCwgdGFyZ2V0SWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgY3Vyc2VyLnNldEZsYWcoJ2N1cnNlZCcsIGN1cnNlLCBuZXh0VGFyZ2V0TGlzdClcblxuXG4gICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICBpZiAobGlzdC5pbmNsdWRlcyh0YXJnZXQuaWQpKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGN1cnNlKGN1cnNlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1c2VyID0gZ2FtZS51c2VyO1xuICAgIGNvbnN0IHRhcmdldHMgPSB1c2VyPy50YXJnZXRzID8gQXJyYXkuZnJvbSh1c2VyLnRhcmdldHMpIDogW107XG4gICAgLy8gVE9ETzogTWFrZSBzdXJlIHRoaXMgaXMgdGhlIGJlc3Qgd2F5IHRvIGRvIHRoaXM7XG4gICAgY29uc3Qgc2VsZWN0ZWRJZCA9IENoYXRNZXNzYWdlLmdldFNwZWFrZXIoKS50b2tlbjtcblxuICAgIGlmICghc2VsZWN0ZWRJZCkge1xuICAgICAgICByZXR1cm4gdWkubm90aWZpY2F0aW9ucz8uZXJyb3IoJ1BsZWFzZSBzZWxlY3QgYSB0b2tlbicpXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB0YXJnZXQgb2YgdGFyZ2V0cykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRBUkdFVDogXCIsIHRhcmdldCk7XG4gICAgICAgIGF3YWl0IHNldFRhcmdldGluZ0ZsYWcodGFyZ2V0LmlkLCBzZWxlY3RlZElkLCBjdXJzZSlcbiAgICB9XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzFlMmNhZGU4MDcyNWVkOTJmMTFcIikiXSwic291cmNlUm9vdCI6IiJ9