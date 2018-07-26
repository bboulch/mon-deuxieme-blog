export class Post {
  constructor(
    public title: string,
    public content: string,
    public loveIts: number
  ) {
    this.created_at = new Date();
  }

  created_at: Date;

}
