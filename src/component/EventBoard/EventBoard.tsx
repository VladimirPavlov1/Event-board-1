import css from "./EventBoard.module.css"

type Events = {
    events:Array<EventCard>
}

type EventCard = {
    name:string,
    location:string,
    speaker:string,
    type:string,
    time:{
      start:string,
      end:string
    }
  }

  

export const EventBoard = (props:Events) =>{
    return (
        <div className={css.eventBoard}>
            Event card
        </div>
    )
}