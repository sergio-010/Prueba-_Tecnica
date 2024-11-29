import prisma from "@/lib/prisma";

interface GetBrandsProps {
  take?: number | null;
  skip?: number | null;
}

export const getBrands = async ({ take = 5, skip = 0 }: GetBrandsProps) => {
  try {
    const res = await prisma.brand.findMany({
      take: Number(take),
      skip: Number(skip),
    });

    return { brands: res, error: null };
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Ups ocurrio un error";
    return { brands: [], error: errMsg };
  }
}

export const getBrand = async (id: number) => {
  try {
    const res = await prisma.brand.findUnique({ where: { id } });

    return { brand: res, error: null };
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Ups ocurrio un error";
    return { brand: null, error: errMsg };
  }
}