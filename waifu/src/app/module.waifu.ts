export interface Cryptocoin {
    status: string;
    data:   Data;
}

export interface Data {
    coin: Coin;
}

export interface Coin {
    uuid:                  string;
    symbol:                string;
    name:                  string;
    description:           string;
    color:                 string;
    iconUrl:               string;
    websiteUrl:            string;
    links:                 Link[];
    supply:                Supply;
    numberOfMarkets:       number;
    numberOfExchanges:     number;
    "24hVolume":           string;
    marketCap:             string;
    fullyDilutedMarketCap: string;
    price:                 string;
    btcPrice:              string;
    priceAt:               number;
    change:                string;
    rank:                  number;
    sparkline:             string[];
    allTimeHigh:           AllTimeHigh;
    coinrankingUrl:        string;
    tier:                  number;
    lowVolume:             boolean;
    listedAt:              number;
    hasContent:            boolean;
    notices:               null;
    tags:                  string[];
}

export interface AllTimeHigh {
    price:     string;
    timestamp: number;
}

export interface Link {
    name: string;
    type: string;
    url:  string;
}

export interface Supply {
    confirmed:   boolean;
    supplyAt:    number;
    max:         string;
    total:       string;
    circulating: string;
}
/*
export interface Waifu {
    images: Image[];
}

export interface Image {
    signature:      string;
    extension:      string;
    image_id:       number;
    favorites:      number;
    dominant_color: string;
    source:         string;
    artist:         Artist;
    uploaded_at:    Date;
    liked_at:       null;
    is_nsfw:        boolean;
    width:          number;
    height:         number;
    byte_size:      number;
    url:            string;
    preview_url:    string;
    tags:           Tag[];
}

export interface Artist {
    artist_id:   number;
    name:        string;
    patreon:     null;
    pixiv:       string;
    twitter:     string;
    deviant_art: null;
}

export interface Tag {
    tag_id:      number;
    name:        string;
    description: string;
    is_nsfw:     boolean;
}
*/