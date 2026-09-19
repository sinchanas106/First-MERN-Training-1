// function EventSection() {
//   return (
//     <section id="events" className="events-section">
//       <p className="section-label">Upcoming Activities</p>

//       <h2>Explore Campus Events</h2>

//       <div className="event-grid">
//         <article className="event-card">
//           <p className="event-category">Technology</p>

//           <h3>MERN Stack Workshop</h3>

//           <p>
//             Learn the basics of MongoDB, Express, React, and Node.js through a
//             practical workshop.
//           </p>

//           <p>
//             <strong>Date:</strong> 25 September 2026
//           </p>

//           <p>
//             <strong>Location:</strong> Computer Lab 1
//           </p>

//           <button type="button">View Details</button>
//         </article>

//         <article className="event-card">
//           <p className="event-category">Technology</p>

//           <h3>College Hackathon</h3>

//           <p>
//             Form a team, solve a real problem, and present your solution to
//             mentors.
//           </p>

//           <p>
//             <strong>Date:</strong> 28 September 2026
//           </p>

//           <p>
//             <strong>Location:</strong> Main Auditorium
//           </p>

//           <button type="button">View Details</button>
//         </article>

//         <article className="event-card">
//           <p className="event-category">Sports</p>

//           <h3>Campus Football Trials</h3>

//           <p>
//             Join football team selection trials. Bring your college ID card.
//           </p>

//           <p>
//             <strong>Date:</strong> 2 October 2026
//           </p>

//           <p>
//             <strong>Location:</strong> College Ground
//           </p>

//           <button type="button">View Details</button>
//         </article>
//       </div>
//     </section>
//   );
// }

// export default EventSection;
// import EventCard from "./EventCard";
// function EventSection(){
//   return (
//     <section id = "events" className="event-section">
//       <p className="section-label"></p>
//       <h2> Explore the campus Activitie </h2>
//       <div className="event-grid"></div>
//       <EventCard
//       category="Technology"
//       title="Mern Stack Workshop"
//       discription="Learn the basics of mangodb "
//       date=" 18 September 2026"
//       time="09:30:23"
//       />
//       <EventCard
//       category="Technology"
//       title="FULL Stack Workshop"
//       discription="Learn the basics of HTML "
//       date=" 23September 2026"
//       time="10:30:23"
//       />
//       <EventCard
//       category="Sports"
//       title="Kabbadi Cricket "
//       discription="Play and win the prize of 100000 rupee"
//       date=" 28 September 2026"
//       time="11:30:23"
//       />
//     </section>
//   );
// }
// export default EventSection;
import EventCard from "./EventCard";
function EventSection({ events }) {
  return (
    <section id="events" className="events-section">
      <div className="section-heading">
        <div>
          <p className="section-label">Upcoming Activities</p>

          <h2>Explore Campus Events</h2>
        </div>

        <p>{events.length} events available</p>
      </div>

      {events.length === 0 ? (
        <p>No events are available right now.</p>
      ) : (
        <div className="event-grid">
          {events.map(function (event) {
            return (
              <EventCard
                key={event.id}
                title={event.title}
                category={event.category}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default EventSection;