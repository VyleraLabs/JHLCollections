"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface CustomDatePickerProps {
    selectedDate: string;
    onSelect: (date: string) => void;
    label: string;
    isOpen: boolean;
    onClose: () => void;
    side?: "top" | "bottom";
}

export default function CustomDatePicker({
    selectedDate,
    onSelect,
    label,
    isOpen,
    onClose,
    side = "bottom"
}: CustomDatePickerProps) {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Initialize currentMonth based on selectedDate if it's valid
    useEffect(() => {
        if (selectedDate) {
            const date = new Date(selectedDate);
            if (!isNaN(date.getTime())) {
                setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
            }
        }
    }, [selectedDate, isOpen]);

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleDateClick = (day: number) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        const formattedDate = date.toISOString().split("T")[0];
        onSelect(formattedDate);
        onClose();
    };

    const isSelected = (day: number) => {
        if (!selectedDate) return false;
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        return date.toISOString().split("T")[0] === selectedDate;
    };

    const isToday = (day: number) => {
        const today = new Date();
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        return date.toDateString() === today.toDateString();
    };

    const monthName = currentMonth.toLocaleString("default", { month: "long" });
    const year = currentMonth.getFullYear();

    const days = [];
    const totalDays = daysInMonth(year, currentMonth.getMonth());
    const startDay = firstDayOfMonth(year, currentMonth.getMonth());

    for (let i = 0; i < startDay; i++) {
        days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
        const selected = isSelected(day);
        const today = isToday(day);

        days.push(
            <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={cn(
                    "h-10 w-10 rounded-full flex items-center justify-center text-xs transition-all duration-300",
                    selected
                        ? "bg-brand-gold text-brand-dark font-bold scale-110 shadow-lg shadow-brand-gold/20"
                        : "text-white/80 hover:bg-white/10 hover:text-brand-gold",
                    today && !selected && "border border-brand-gold/50 text-brand-gold"
                )}
            >
                {day}
            </button>
        );
    }

    const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:bg-transparent"
                    />

                    {/* Picker Dialog */}
                    <motion.div
                        initial={{ opacity: 0, y: side === "top" ? -10 : 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: side === "top" ? -10 : 10, scale: 0.95 }}
                        className={cn(
                            "absolute left-1/2 -translate-x-1/2 z-[80] bg-brand-dark border border-white/20 rounded-2xl p-6 shadow-2xl w-[320px] !overflow-visible",
                            side === "top" ? "bottom-full mb-4" : "top-full mt-4"
                        )}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-brand-gold font-serif italic text-lg">{label}</h3>
                            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <button onClick={prevMonth} className="text-white/60 hover:text-brand-gold transition-colors">
                                <ChevronLeft size={20} />
                            </button>
                            <div className="text-sm font-bold uppercase tracking-widest text-white">
                                {monthName} {year}
                            </div>
                            <button onClick={nextMonth} className="text-white/60 hover:text-brand-gold transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-7 gap-2 mb-2">
                            {weekDays.map(day => (
                                <div key={day} className="h-10 w-10 flex items-center justify-center text-[10px] uppercase font-bold text-white/30 tracking-tighter">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                            {days}
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                            <button
                                onClick={() => {
                                    onSelect("");
                                    onClose();
                                }}
                                className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                            >
                                Clear
                            </button>
                            <div className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                                Select a date
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
