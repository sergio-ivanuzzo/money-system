import * as React from "react";
import { History, createBrowserHistory } from "history";

interface IHistoryContext {
    history: History;
}

export const HistoryContext: React.Context<IHistoryContext> = React.createContext({
    history: createBrowserHistory()
});
