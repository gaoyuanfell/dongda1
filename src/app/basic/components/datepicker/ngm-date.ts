export class NgmDate {
    static from(date: { year: number, month: number, day?: number }) {
        return date ? new NgmDate(date.year, date.month, date.day ? date.day : 1) : null;
    }

    constructor(public year: number, public month: number, public day: number) {
    }

    equals(other: NgmDate) {
        return other && this.year === other.year && this.month === other.month && this.day === other.day;
    }

    before(other: NgmDate) {
        if (!other) {
            return false;
        }

        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day < other.day;
            } else {
                return this.month < other.month;
            }
        } else {
            return this.year < other.year;
        }
    }

    after(other: NgmDate) {
        if (!other) {
            return false;
        }
        if (this.year === other.year) {
            if (this.month === other.month) {
                return this.day === other.day ? false : this.day > other.day;
            } else {
                return this.month > other.month;
            }
        } else {
            return this.year > other.year;
        }
    }

    toString() {
        return `${this.year}-${this.month}-${this.day}`;
    }
}
