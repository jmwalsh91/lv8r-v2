export interface UserObj  {
       id: Number
       username: string,
       category: string,
       bio: string,
       pitch: Number | null,
       encountered_pitches: Array<Number>,
       received_cards: Array<Number> | null,
       sent_cards: Array<Number> | null,
       owner: string | null
     }
    