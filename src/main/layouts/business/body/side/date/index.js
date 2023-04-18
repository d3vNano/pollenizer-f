import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Text() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const weekDays = [];
    const todayWeekday = today.getDay();

    let sunday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - todayWeekday
    );

    for (let i = 0; i < 14; i++) {
        const day = new Date(
            sunday.getFullYear(),
            sunday.getMonth(),
            sunday.getDate() + i
        );
        if (i < 7 || day.getMonth() === today.getMonth()) {
            weekDays.push(day);
        }
    }

    const hiddenDays = [];

    for (let i = 1; i <= lastDayOfMonth; i++) {
        const day = new Date(currentYear, currentMonth, i);
        if (
            !weekDays.includes(day) &&
            day.getDate() !== 1 &&
            day.getDate() >= 16
        ) {
            hiddenDays.push(day);
        }
    }

    console.log(weekDays);

    return <DayPicker mode="single" />;
}
