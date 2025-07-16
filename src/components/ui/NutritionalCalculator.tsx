'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';

interface NutritionalCalculatorProps {
  product: Product;
}

const NutritionalCalculator = ({ product }: NutritionalCalculatorProps) => {
  const [quantity, setQuantity] = useState(100);
  const [unit, setUnit] = useState('grams');

  const conversionFactors = {
    grams: 1,
    ounces: 28.35,
    pounds: 453.59,
    cups: 120, // Approximate for dehydrated vegetables
    tablespoons: 7.5 // Approximate for dehydrated vegetables
  };

  const calculateNutrition = (baseValue: number) => {
    const factor = (quantity * conversionFactors[unit as keyof typeof conversionFactors]) / 100;
    return Math.round(baseValue * factor * 10) / 10;
  };

  const nutritionData = [
    {
      label: 'Calories',
      value: calculateNutrition(product.nutritionalInfo.calories),
      unit: 'kcal',
      color: 'bg-red-500'
    },
    {
      label: 'Protein',
      value: calculateNutrition(product.nutritionalInfo.protein),
      unit: 'g',
      color: 'bg-blue-500'
    },
    {
      label: 'Carbohydrates',
      value: calculateNutrition(product.nutritionalInfo.carbs),
      unit: 'g',
      color: 'bg-green-500'
    },
    {
      label: 'Fiber',
      value: calculateNutrition(product.nutritionalInfo.fiber),
      unit: 'g',
      color: 'bg-amber-500'
    }
  ];

  const dailyValues = {
    calories: 2000,
    protein: 50,
    carbs: 300,
    fiber: 25
  };

  const getDailyValuePercentage = (nutrient: string, value: number) => {
    const dvMap: { [key: string]: number } = {
      'Calories': dailyValues.calories,
      'Protein': dailyValues.protein,
      'Carbohydrates': dailyValues.carbs,
      'Fiber': dailyValues.fiber
    };
    
    const dv = dvMap[nutrient];
    return dv ? Math.round((value / dv) * 100) : 0;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Nutritional Calculator
      </h3>
      
      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            max="10000"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Unit
          </label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="grams">Grams</option>
            <option value="ounces">Ounces</option>
            <option value="pounds">Pounds</option>
            <option value="cups">Cups (approx)</option>
            <option value="tablespoons">Tablespoons (approx)</option>
          </select>
        </div>
      </div>

      {/* Nutrition Display */}
      <div className="space-y-6">
        <div className="text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Nutrition Facts for {quantity} {unit} of {product.name}
          </h4>
          <p className="text-sm text-gray-600">
            Based on {quantity * conversionFactors[unit as keyof typeof conversionFactors]}g serving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {nutritionData.map((nutrient, index) => (
            <motion.div
              key={nutrient.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center"
            >
              <div className={`w-12 h-12 ${nutrient.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <span className="text-white font-bold text-lg">
                  {nutrient.label.charAt(0)}
                </span>
              </div>
              <h5 className="font-semibold text-gray-900 mb-1">{nutrient.label}</h5>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {nutrient.value}
                <span className="text-sm font-normal text-gray-600 ml-1">
                  {nutrient.unit}
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {getDailyValuePercentage(nutrient.label, nutrient.value)}% DV*
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vitamins & Minerals */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
          <h5 className="font-semibold text-gray-900 mb-4">Key Vitamins & Minerals</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {product.nutritionalInfo.vitamins.map((vitamin, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                <span className="text-sm text-gray-700">{vitamin}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Value Note */}
        <div className="text-xs text-gray-500 text-center border-t pt-4">
          * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
            Save Calculation
          </button>
          <button className="flex-1 border border-amber-600 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors font-medium">
            Share Results
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutritionalCalculator;
