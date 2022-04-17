export interface UserObj  {
       id: Number
       username: String,
       bio: String,
       pitch: Number | null,
       encountered_pitches: Array<Number>,
       received_cards: Array<Number> | null,
       sent_cards: Array<Number> | null,
       owner: String | null
     }
    