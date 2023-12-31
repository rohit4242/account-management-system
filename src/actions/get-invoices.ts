import { db } from "@/lib/db";

type GetCourses = {
  clientId: number;
  title?: string;
  categoryId?: string;
};

export const getCourses = async ({ clientId }: GetCourses) => {
  try {
    const courses = await db.invoice.findMany({
      where: {
        clientId,
      },
      include: {
        items: {},
      },
      orderBy: {
        dueDate: "asc",
      },
    });

    return courses;
  } catch (error) {
    console.log("[GET_COURSES]", error);
    return [];
  }
};
