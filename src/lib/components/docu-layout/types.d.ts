
export type NavIcon = {
    icon: string,
    link: string,
    title: string,
}

export type NavGroupItem = {
    title: string,
    path: string,
    icon?: string,
}

export type NavGroup = {
    groupTitle: string,
    hideTitle?: boolean,
    groupIcon?: string,
    items: NavGroupItem[],
}

export type NavPage = {
    showSidebar: boolean,
    landingPath: string,
    pageIcon?: string,
    groups: NavGroup[],
}

export type Navigation = {
    [key: string]: NavPage
}