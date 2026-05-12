import {HTTP_STATUS} from '../config/constant.js';

export const successResponse = (data , message = 'Success') =>{
    return {
        status: HTTP_STATUS.OK,
        success: true,
        message,
        data
    }
}

export const createResponse = (data , message = 'Created Successfully') =>{
    return {
        status: HTTP_STATUS.CREATED,
        success: true,
        message,
        data
    }
}

export const deleteResponse = (data , message = 'Deleted Successfully') =>{
    return {
        status: HTTP_STATUS.NO_CONTENT,
        success: true,
        message,
        data : null
    }
}