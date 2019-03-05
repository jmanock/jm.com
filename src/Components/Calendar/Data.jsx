export default{
  getEvents:()=>{
    const eventMeta = [
      {start:'2019-03-04', end:'2019-03-04', title:'Something About to go down', link:'cftv.live', description:'Testing this shit', time:'8:00pm', where:'The Ace'}
    ];
    const events = eventMeta.map((data) =>{
      return{
        start:data.start,
        end:data.end,
        eventClasses:'custom-event-class',
        title:data.title,
        description:data.description,
        link:data.link,
        where:data.where,
        time:data.time
      }
    });
    return events;
  }
}
