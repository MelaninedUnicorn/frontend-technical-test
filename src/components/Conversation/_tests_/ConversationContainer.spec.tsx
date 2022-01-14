import {
    screen,
    waitForElementToBeRemoved,
} from "@testing-library/react"
import ConversationContainer from "../ConversationContainer"
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
    rest.get<DefaultRequestBody, any>(
        `${baseUrl}/conversations/1`,
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.json([
                    {
                        "id": 1,
                        "recipientId": 2,
                        "recipientNickname": "Jeremie",
                        "senderId": 1,
                        "senderNickname": "Thibaut",
                        "lastMessageTimestamp": 1625637849
                    },
                    {
                        "id": 2,
                        "recipientId": 3,
                        "recipientNickname": "Patrick",
                        "senderId": 1,
                        "senderNickname": "Thibaut",
                        "lastMessageTimestamp": 1620284667
                    },
                    {
                        "id": 3,
                        "recipientId": 1,
                        "recipientNickname": "Thibaut",
                        "senderId": 4,
                        "senderNickname": "Elodie",
                        "lastMessageTimestamp": 1625648667
                    }
                ])
            );
        }
    ),

    rest.get<DefaultRequestBody, any>(
        `${baseUrl}/conversations/2`,
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.json([
                    {
                        "id": 1,
                        "recipientId": 2,
                        "recipientNickname": "Jeremie",
                        "senderId": 1,
                        "senderNickname": "Thibaut",
                        "lastMessageTimestamp": 1625637849
                    }
                ])
            );
        }
    ),

    rest.get<DefaultRequestBody, { message: string }>(
        `${baseUrl}/conversations/undefined`,
        (req, res, ctx) => {
            return res(
                ctx.delay(100),
                ctx.status(500),
                ctx.json({ message: 'The conversation is undefined' })
            );
        }
    )

);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("ConversationContainer", () => {

    describe('when user id is 1', () => {
        beforeEach(async () => {
            customRender(<ConversationContainer userId={1} />);

            await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
        });

        it('renders the conversation container', () => {
            const element = screen.getByTestId("conversation-container");
            expect(element).toBeInTheDocument();
        });

        it('renders the expected conversations', () => {
            expect(screen.getByText('Jeremie')).toBeInTheDocument();
            expect(screen.getByText('Patrick')).toBeInTheDocument();
            expect(screen.getByText('Elodie')).toBeInTheDocument();

        });
    })
    describe('when user id is 2', () => {
        beforeEach(async () => {
            customRender(<ConversationContainer userId={2} />);

            await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
        });

        it('renders the conversation container', () => {
            const element = screen.getByTestId("conversation-container");
            expect(element).toBeInTheDocument();
        });

        it('renders the expected conversations', () => {
            expect(screen.getByText('Jeremie')).toBeInTheDocument();

        });
    })
    describe('when user id undefined', () => {
        beforeEach(async () => {
            customRender(<ConversationContainer userId={undefined} />);

            await waitForElementToBeRemoved(() => screen.getByTestId("spinner"));
        });


        it('renders the expected conversations', () => {
            expect(screen.getByText(/Vous n'avez pas de messages/)).toBeInTheDocument();

        });
    })








}) 