class Calendar {
    constructor() {
        this.currentDate = new Date();
        this.selectedDate = null;
        this.events = this.loadEvents();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.render();
        this.updateInfo();
    }

    setupEventListeners() {
        document.getElementById('prevBtn').addEventListener('click', () => this.previousMonth());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextMonth());
        document.getElementById('todayBtn').addEventListener('click', () => this.goToToday());
        document.getElementById('clearBtn').addEventListener('click', () => this.clearSelection());
    }

    render() {
        this.renderMonthYear();
        this.renderDays();
    }

    renderMonthYear() {
        const options = { month: 'long', year: 'numeric' };
        const monthYearStr = this.currentDate.toLocaleDateString('en-US', options);
        document.getElementById('monthYear').textContent = monthYearStr;
    }

    renderDays() {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const daysContainer = document.getElementById('daysContainer');
        daysContainer.innerHTML = '';

        // Add previous month's days
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = startingDayOfWeek - 1; i >= 0; i--) {
            const day = document.createElement('div');
            day.className = 'day other-month';
            day.textContent = prevMonthLastDay - i;
            daysContainer.appendChild(day);
        }

        // Add current month's days
        const today = new Date();
        for (let date = 1; date <= daysInMonth; date++) {
            const day = document.createElement('div');
            day.className = 'day';
            day.textContent = date;

            const currentCellDate = new Date(year, month, date);
            
            // Check if it's today
            if (this.isToday(currentCellDate)) {
                day.classList.add('today');
            }

            // Check if it's selected
            if (this.isSelected(currentCellDate)) {
                day.classList.add('selected');
            }

            day.addEventListener('click', () => this.selectDate(currentCellDate));
            daysContainer.appendChild(day);
        }

        // Add next month's days
        const totalCells = daysContainer.children.length;
        const remainingCells = 42 - totalCells;
        for (let date = 1; date <= remainingCells; date++) {
            const day = document.createElement('div');
            day.className = 'day other-month';
            day.textContent = date;
            daysContainer.appendChild(day);
        }

        // Update days in month info
        document.getElementById('daysInMonth').textContent = daysInMonth;
    }

    isToday(date) {
        const today = new Date();
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    }

    isSelected(date) {
        if (!this.selectedDate) return false;
        return date.getDate() === this.selectedDate.getDate() &&
               date.getMonth() === this.selectedDate.getMonth() &&
               date.getFullYear() === this.selectedDate.getFullYear();
    }

    selectDate(date) {
        this.selectedDate = new Date(date);
        this.render();
        this.updateInfo();
    }

    clearSelection() {
        this.selectedDate = null;
        this.render();
        this.updateInfo();
    }

    previousMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.render();
    }

    nextMonth() {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.render();
    }

    goToToday() {
        this.currentDate = new Date();
        this.selectedDate = new Date();
        this.render();
        this.updateInfo();
    }

    updateInfo() {
        // Update today's date
        const today = new Date();
        const todayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('todayDate').textContent = today.toLocaleDateString('en-US', todayOptions);

        // Update selected date
        if (this.selectedDate) {
            const selectedOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('selectedDate').textContent = 
                this.selectedDate.toLocaleDateString('en-US', selectedOptions);
        } else {
            document.getElementById('selectedDate').textContent = 'None';
        }
    }

    loadEvents() {
        const stored = localStorage.getItem('calendarEvents');
        return stored ? JSON.parse(stored) : {};
    }

    saveEvents() {
        localStorage.setItem('calendarEvents', JSON.stringify(this.events));
    }
}

// Initialize calendar when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new Calendar();
});
