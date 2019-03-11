export default{
  getEvents:() =>{
    const eventMeta = [
      {start:'2019-03-17', end:'2019-03-17', title:'St. Pattys Day', link:'https://cftv.live', description:'Enjoy the green beer and luck of the Irish', time:'All Day', where:'Everywhere'},
      {start:'2019-03-17', end:'2019-03-17', title:'Gps Birthday', link:'https://cftv.live', description:'Help celebrate Gerrys 94th birthday', time:'6:00pm', where:'First Watch'}
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
