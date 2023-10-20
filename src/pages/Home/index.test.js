import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !", {}, { timeout: 5000 }); // ajout d'un tiler pour attendre que le texte d'affiche 
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    await(() => {
      const eventList = screen.getByTestId("events");
      expect(eventList).toBeInTheDocument();
    });
  });
});

  it("a list a people is displayed",  () => {
    render(<Home />);
    waitFor(() => {
      const cardImage = screen.getAllByTestId("card-image-testid");
      expect(cardImage.length).toBeGreaterThan(0);
    });
  })

  it("a footer is displayed",  () => {
    render(<Home />);
     waitFor(() => {
      const footerDisplayed = screen.getByTestId("footer");
      expect(footerDisplayed).toBeInTheDocument();
    });
  })

  it("an event card, with the last event, is displayed",   () => {
    render(<Home />);
    waitFor(() => {
      const cardDisplayed = screen.getByTestId("card-testid");
      expect(cardDisplayed).toBeInTheDocument();
    });
  })
