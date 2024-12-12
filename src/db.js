class Database {
    constructor() {
        this.lastRecordId = 0;
        this.records = {}; 
    }

    addRecord(record) {
        this.lastRecordId += 1; 
        this.records[this.lastRecordId] = { ...record, id: this.lastRecordId }; 
        return this.lastRecordId; 
    }

    removeRecord(id) {
        if (this.records[id]) {
            delete this.records[id]; 
            return true; 
        }
        return false; 
    }

    updateRecord(record) {
        const { id } = record;
        if (this.records[id]) {
            this.records[id] = { ...this.records[id], ...record }; 
            return true; 
        }
        return false; 
    }
}

const db = new Database();