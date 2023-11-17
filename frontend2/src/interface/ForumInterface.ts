interface ForumInterface {
    id: number;
    title: string;
    question: string;
    created_at: Date;
    user: UserInterface;
}