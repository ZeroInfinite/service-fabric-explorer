import * as $ from "jquery";
// import * as Url from "url";
import { IClusterList } from "sfx.cluster-list";

(async() => {
    $("#btn-delete-cluster").click(async () => {
        let cluster = localStorage.getItem("cluster");
        localStorage.removeItem("cluster");
        try{
            console.log("deleting " + cluster);
            const list = await sfxModuleManager.getComponentAsync<IClusterList>("cluster-list");
            console.log("deleting " + cluster);
            await list.removeCluster(cluster);
            console.log("deleting " + cluster);
            window.close();

        }catch(error){
            alert("Error Occured");

        }
        return false;
    });

    $("#btn-exit").click(() => {
        window.close();
    });
})();