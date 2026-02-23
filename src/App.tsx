import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";
import { Header } from "./components/Header";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <>
      <Header>
        <TimerIcon />
        Chronos
      </Header>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus
        posuere pharetra. Suspendisse pulvinar id ante vitae congue. Nunc mattis
        efficitur tellus. In nec arcu non orci gravida convallis efficitur nec
        eros. Nunc ante ex, varius sed porta non, fringilla vitae nunc.
        Phasellus varius efficitur orci. Etiam odio ipsum, suscipit a nisl nec,
        hendrerit blandit turpis. Ut viverra dolor ac scelerisque molestie. Sed
        lectus mi, sodales ut augue nec, consectetur venenatis purus. Cras a
        massa imperdiet, volutpat diam in, semper augue. Aliquam quis nisi
        vestibulum, volutpat purus ut, blandit risus. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
    </>
  );
}
