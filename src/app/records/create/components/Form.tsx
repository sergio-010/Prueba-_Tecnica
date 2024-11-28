'use client';

import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { INITIAL_VALUES, validationSchema } from '../helpers/createBrand.helper';


export default function StepsForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const formik = useFormik({
        initialValues: INITIAL_VALUES,
        validationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                console.log("Form values:", values);
                alert(`Datos Registrados: ${JSON.stringify(values, null, 2)}`);
                router.push("/");
            } catch (error) {
                console.error("Error registrando la marca:", error);
            } finally {
                setLoading(false);
            }
        },
    });

    const handleNext = () => {
        // Valida campos del paso actual antes de avanzar
        if (currentStep === 1) {
            if (!formik.values.brand) {
                formik.setFieldTouched("brand", true);
                formik.validateField("brand");
                return;
            }
        }
        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => setCurrentStep(currentStep - 1);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={formik.handleSubmit}
                className="w-full max-w-lg p-6 rounded-xl border shadow-md"
            >
                <h1 className="text-2xl font-bold text-center uppercase mb-4">
                    {currentStep === 1
                        ? "Paso 1: Nombre de la Marca"
                        : currentStep === 2
                            ? "Paso 2: Titular de la Marca"
                            : "Paso 3: Confirmación"}
                </h1>

                {/* Step 1: Brand */}
                {currentStep === 1 && (
                    <div className="mb-4">
                        <label htmlFor="brand" className="block text-sm font-medium">
                            Nombre de la marca
                        </label>
                        <input
                            id="brand"
                            name="brand"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.brand}
                            className={`mt-1 block w-full p-2 border ${formik.touched.brand && formik.errors.brand
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md shadow-sm`}
                        />
                        {formik.touched.brand && formik.errors.brand && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.brand}</p>
                        )}
                    </div>
                )}

                {/* Step 2: Trademark Owner */}
                {currentStep === 2 && (
                    <div className="mb-4">
                        <label
                            htmlFor="trademarkOwner"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Titular de la marca
                        </label>
                        <input
                            id="trademarkOwner"
                            name="trademarkOwner"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.trademarkOwner}
                            className={`mt-1 block w-full p-2 border ${formik.touched.trademarkOwner && formik.errors.trademarkOwner
                                ? "border-red-500"
                                : "border-gray-300"
                                } rounded-md shadow-sm`}
                        />
                        {formik.touched.trademarkOwner && formik.errors.trademarkOwner && (
                            <p className="text-red-500 text-sm mt-1">
                                {formik.errors.trademarkOwner}
                            </p>
                        )}
                    </div>
                )}

                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                    <div className="mb-4">
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Nombre de la marca:</strong> {formik.values.brand}
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Titular de la marca:</strong> {formik.values.trademarkOwner}
                        </p>
                    </div>
                )}

                {/* Control Buttons */}
                <div className="flex justify-between mt-4">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
                        >
                            Anterior
                        </button>
                    )}

                    {currentStep < 3 && (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-800"
                        >
                            Siguiente
                        </button>
                    )}

                    {currentStep === 3 && (
                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? "Enviando..." : "Confirmar"}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
