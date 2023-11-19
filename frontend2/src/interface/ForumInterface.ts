interface ForumInterface {
    id: number;
    title: string;
    question: string;
    createdAt: String;
    user: UserInterface;
    slug: string;
}