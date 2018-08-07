//-----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.  All rights reserved.
// Licensed under the MIT License. See License file under the project root for license information.
//-----------------------------------------------------------------------------

declare module "sfx.main-window" {    
    export interface IMainWindow {        
        loadAsync(): void;    
                   
    }

    export interface IDialogService {
        showDialogAsync(pageUrl: string): Promise<void>;
    }
}

declare module "sfx.module-manager" {
    import { IMainWindow } from "sfx.main-window";    

    export interface IModuleManager {
        getComponentAsync(componentIdentity: "main-window"): Promise<IMainWindow>;        
    }
}

declare module "sfx.sfx-view-container" {
    export interface ISfxContainer {
        LoadSfxAsync(targetServiceEndpoint: string): Promise<void>;
    }
}

declare module "sfx.cluster-list" {
    export interface IClusterList {
        newListItemAsync(endpoint: string, name?: string, folder?: string): Promise<void>;
        newFolderItemAsync(label: string): Promise<void>;
        removeCluster(label:string): Promise<void>;
        renameCluster(old_cluster: string, new_cluster: string): Promise<void>;
        moveCluster(cluster: string, new_folder_label: string): Promise<void>;
        removeFolder(label: string): Promise<void>;
    }
}

declare module "sfx.menu" {
    export interface IMenu {
        addFolder(label: string);
        addCluster(label: string, url: string, folder: string);
        removeFolder(label: string);
        removeCluster(cluster_label: string, folder_label: string);
        renameFolder(old_name: string, new_name: string);
        renameCluster(old_name: string, new_name: string);
        moveCluster(label: string, new_folder_label: string);
        folderExists(label: string);
        getFolders();
        getCluster(label: string, type: string);
        getFolder(label: string);
    }
}