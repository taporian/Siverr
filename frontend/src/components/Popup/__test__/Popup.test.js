import { render, screen, fireEvent } from "@testing-library/react";
import Popup from "../Popup";



	test("Should have button X", () => {
		render(<Popup  trigger={true}/>);
		const button = screen.getByTestId('buttonPopup')
		expect(button.textContent).toBe("X");
	});

