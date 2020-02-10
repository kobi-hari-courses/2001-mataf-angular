export interface Show {
    id:           number;
    url:          string;
    name:         string;
    type:         string;
    language:     string;
    genres:       string[];
    status:       string;
    runtime:      number;
    premiered:    Date;
    officialSite: null | string;
    schedule:     Schedule;
    rating:       Rating;
    weight:       number;
    network:      Network | null;
    webChannel:   Network | null;
    externals:    Externals;
    image:        Image;
    summary:      string;
    updated:      number;
    _links:       Links;
}

export interface Links {
    self:            Nextepisode;
    previousepisode: Nextepisode;
    nextepisode?:    Nextepisode;
}

export interface Nextepisode {
    href: string;
}

export interface Externals {
    tvrage:  number;
    thetvdb: number | null;
    imdb:    null | string;
}

export interface Image {
    medium:   string;
    original: string;
}

export interface Network {
    id:      number;
    name:    string;
    country: Country | null;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export interface Rating {
    average: number | null;
}

export interface Schedule {
    time: string;
    days: string[];
}
