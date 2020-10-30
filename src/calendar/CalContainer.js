import React, { useEffect, useState, useMemo } from "react";
import { Redirect } from "react-router-dom";
import "./calStyle.css";

import SideBar from "./CalSideBar";
import Calendar from "./Calendar";
import { getEventsByUserId } from "./apiCalendar";
import { isAuthenticated } from "../auth";
import { EventContext } from "../context/EventContext";

const CalContainer = (props) => {
  const userId = props.match.params.userId;
  const [redirectTo, setRedirectTo] = useState(false);
  const [events, setEvents] = useState([]);
  const eventValues = useMemo(() => ({ events, setEvents }), [
    events,
    setEvents,
  ]);
  useEffect(() => {
    getEventsByUserId(userId, isAuthenticated().token).then((data) => {
      if (data.error) {
        setRedirectTo(true);
      } else {
        setEvents(data);
      }
    });
  }, [userId]);

  return (
    <>
      {redirectTo ? (
        <Redirect to={`/404`} />
      ) : (
        <EventContext.Provider value={eventValues}>
          <div className="wrapper calContainer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <SideBar userId={userId} />
                        <Calendar userId={userId} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </EventContext.Provider>
      )}
    </>
  );
};

export default CalContainer;
