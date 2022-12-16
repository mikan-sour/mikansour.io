import { TPost } from "../../types";
import { filterByTagsAndMatching, filterByTagsOrMatching } from "../posts";

describe("when filtering for tags AND", () => {
  it("filters for files that match all supplied tags", () => {
    const posts: TPost[] = [
      {
        id: "",
        title: "",
        desc: "",
        date: "",
        labels: ["react", "vue", "angular", "go"],
        content: "",
      },
      {
        id: "",
        title: "",
        desc: "",
        date: "",
        labels: ["react", "go", "elixir"],
        content: "",
      },
      {
        id: "",
        title: "",
        desc: "",
        date: "",
        labels: ["react", "gcp", "nextjs"],
        content: "",
      },
      {
        id: "",
        title: "",
        desc: "",
        date: "",
        labels: ["react", "go", "angular"],
        content: "",
      },
    ];

    const tags = ["react", "go", "angular"];

    expect(filterByTagsAndMatching(posts, tags)).toEqual(
      expect.arrayContaining([
        {
          id: "",
          title: "",
          desc: "",
          date: "",
          labels: ["react", "go", "angular"],
          content: "",
        },
        {
          id: "",
          title: "",
          desc: "",
          date: "",
          labels: ["react", "vue", "angular", "go"],
          content: "",
        },
      ])
    );
  });
});

describe("when filtering for tags OR", () => {
  it("filters for files that match all supplied tags", () => {
    const posts: TPost[] = [
      {
        id: "",
        title: "",
        desc: "",
        date: "",
        labels: ["react", "vue", "angular", "go"],
        content: "",
      },
      {
        id: "",
        title: "",
        desc: "",
        date: "",
        labels: ["react", "go", "elixir"],
        content: "",
      },
      {
        id: "",
        title: "",
        desc: "",
        date: "",
        labels: ["angular", "gcp", "nextjs"],
        content: "",
      },
      {
        id: "",
        title: "",
        desc: "",
        date: "",
        labels: ["react"],
        content: "",
      },
    ];

    const tags = ["go", "angular"];

    expect(filterByTagsOrMatching(posts, tags)).toEqual(
      expect.arrayContaining([
        {
          id: "",
          title: "",
          desc: "",
          date: "",
          labels: ["react", "vue", "angular", "go"],
          content: "",
        },
        {
          id: "",
          title: "",
          desc: "",
          date: "",
          labels: ["react", "go", "elixir"],
          content: "",
        },
        {
          id: "",
          title: "",
          desc: "",
          date: "",
          labels: ["angular", "gcp", "nextjs"],
          content: "",
        },
      ])
    );
  });
});
