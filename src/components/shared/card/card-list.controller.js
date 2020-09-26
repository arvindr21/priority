import * as Tasks from '../../../core/store';

export default {
    add(task, type) {
        Tasks.INU.set(type, [task]);
    },

    remove(task, type) {

    },

    completed(task, type) {

    },

    archive(task, type) {

    }
}