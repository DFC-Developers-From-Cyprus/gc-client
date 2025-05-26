import { ChoiceComponent } from '../components/ChoiceComponent/ChoiceComponent';
import { ChoicePollComponent } from '../components/ChoicePollComponent/ChoicePollComponent';
import { EventCardFull } from '../components/EventCard/EventCardFull';
import { ForgotComponent } from '../components/ForgotComponent/ForgotComponent';
import { LoginComponent } from '../components/LoginComponent/LoginComponent';
import { RegComponent } from '../components/RegComponent/RegComponent';
import eventImage from '../../assets/react.svg';
import { EventCardSearch } from '../components/EventCard/EventCardSearch';
import { EventCardCatalog } from '../components/EventCard/EventCardCatalog';

export function StartPage() {
  return (
    <section className="flex flex-col items-center justify-center h-full space-y-6 p-4">
      Start
      <LoginComponent />
      <RegComponent />
      <ForgotComponent
        onCancel={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <ChoiceComponent title={'Level of pollution'} />
      <ChoicePollComponent title={'Type of pollution'} />
      <EventCardFull
        imageSrc={eventImage}
        title="Event Title"
        description="This is the full description of the event."
      />
      <EventCardSearch
        imageSrc={eventImage}
        title="Event Title"
        description="This is the full description of the event."
      />
      <EventCardCatalog
        imageSrc={eventImage}
        title="Event Title"
        description="This is the full description of the event."
        organisation="Organization"
      />
    </section>
  );
}
