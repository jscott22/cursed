import { TemplatePreloader } from "./module/helper/TemplatePreloader";
import { curse } from './test';

Hooks.once("init", async () => {
    console.log("=============================HMR============================")
});

Hooks.once('setup', async () => {
    // @ts-ignore
    // window.Cursed = {
    //     curse
    // };
    console.log("Setup Done");
})

Hooks.once("ready", async () => {

});

//@ts-ignore
window.Cursed = {
    curse
};


if (process.env.NODE_ENV === "development") {
    if (module.hot) {
        module.hot.accept();

        if (module.hot.status() === "apply") {
            for (const template in _templateCache) {
                if (Object.prototype.hasOwnProperty.call(_templateCache, template)) {
                    delete _templateCache[template];
                }
            }

            TemplatePreloader.preloadHandlebarsTemplates().then(() => {
                for (const application in ui.windows) {
                    if (Object.prototype.hasOwnProperty.call(ui.windows, application)) {
                        ui.windows[application].render(true);
                    }
                }
            });
        }
    }
}