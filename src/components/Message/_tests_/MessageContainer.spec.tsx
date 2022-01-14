import {
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react"
import MessageContainer from "../MessageContainer"
import { setupServer } from 'msw/node';
import { DefaultRequestBody, rest } from 'msw';
import { customRender } from "../../SwrConfig";
import { baseUrl } from "../../../api/common";

const server = setupServer(
    rest.get<DefaultRequestBody, any>(
        `${baseUrl}/users`,
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.json([
                    {
                        "id": 1,
                        "nickname": "Thibaut",
                        "token": "xxxx"
                    },
                    {
                        "id": 2,
                        "nickname": "Jeremie",
                        "token": "xxxx"
                    },
                    {
                        "id": 3,
                        "nickname": "Patrick",
                        "token": "xxxx"
                    },
                    {
                        "id": 4,
                        "nickname": "Elodie",
                        "token": "xxxx"
                    }
                ])
            );
        }
    ),
    rest.get<DefaultRequestBody>(
        `${baseUrl}/messages/1`,
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.json([
                    {
                        "id": 1,
                        "conversationId": 1,
                        "timestamp": 1625637849,
                        "authorId": 1,
                        "body": "Bonjour c'est le premier message de la première conversation"
                    },
                    {
                        "id": 2,
                        "conversationId": 1,
                        "timestamp": 1625637867,
                        "authorId": 1,
                        "body": "Bonjour c'est le second message de la première conversation"
                    },
                    {
                        "id": 3,
                        "conversationId": 1,
                        "timestamp": 1625648667,
                        "authorId": 2,
                        "body": "Bonjour c'est le troisième message de la première conversation"
                    }
                ])
            );
        }
    ),

    rest.get<DefaultRequestBody>(
        `${baseUrl}/messages/2`,
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.json([
                    {
                        "id": 4,
                        "conversationId": 2,
                        "timestamp": 1620284667,
                        "authorId": 2,
                        "body": "Bonjour c'est le premier message de la seconde conversation"
                    }
                ])
            );
        }
    ),

    rest.get<DefaultRequestBody, { message: string }>(
        `${baseUrl}/messages/undefined`,
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.status(500),
                ctx.json({ message: 'The message is undefined' })
            );
        }
    )

);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("MessageContainer", () => {

    describe('when conversation id is 1', () => {
        beforeEach(async () => {
            customRender(<MessageContainer conversationId={1} />);

            await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
        });

        it('renders the message container', () => {
            const element = screen.getByTestId("message-container");
            expect(element).toBeInTheDocument();
        });

        it('renders the expected messages and the other user\'s name', () => {
            expect(screen.getByText('Jeremie')).toBeInTheDocument();
            expect(screen.getByText(/mercredi 7 juillet 2021 08:04/)).toBeInTheDocument();
            expect(screen.getByText(/mercredi 7 juillet 2021 11:04/)).toBeInTheDocument();
            expect(screen.getByText(/Bonjour c'est le premier message de la première conversation/)).toBeInTheDocument();
            expect(screen.getByText(/Bonjour c'est le second message de la première conversation/)).toBeInTheDocument();
            expect(screen.getByText(/Bonjour c'est le troisième message de la première conversation/)).toBeInTheDocument();


        });
    })
    describe('when conversation id is 2', () => {
        beforeEach(async () => {
            customRender(<MessageContainer conversationId={2} />);

            await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
        });

        it('renders the message container', () => {
            const element = screen.getByTestId("message-container");
            expect(element).toBeInTheDocument();
        });

        it('renders the expected messages', () => {
            expect(screen.getByText('Jeremie')).toBeInTheDocument();
            expect(screen.getByText(/jeudi 6 mai 2021 09:04/)).toBeInTheDocument();
            expect(screen.getByText(/Bonjour c'est le premier message de la seconde conversation/)).toBeInTheDocument();

        });
    })
    describe('when user id undefined', () => {
        beforeEach(async () => {
            customRender(<MessageContainer conversationId={undefined} />);

            await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
        });


        it('renders the expected messages', () => {
            expect(screen.getByText(/Il n'y a pas encore de message/)).toBeInTheDocument();

        });
    })


}) 