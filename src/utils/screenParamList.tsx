import React from "react";

export type ScreenParamList = {
    MainTab: React.FC;
    SelectedDetailsScreen: React.FC<string>;
    Other: React.FC;
    Home: React.FC;
    Favorites: React.FC;
};