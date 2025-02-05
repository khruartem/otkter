import { FC } from "react";

import { useGetEventDetails } from "../../hooks/useGetEventDetails";
import { useGetProjectId } from "../../hooks/useGetProjectId";
import { EventDetailsUI } from "../ui/event-details";

export const EventDetails: FC = () => {
  const projectId = useGetProjectId();
  const eventDetails = useGetEventDetails(projectId);

  return <EventDetailsUI projectId={projectId} details={eventDetails} />;
};
