pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                echo 'Building Room Booking App...'
                bat 'dir' 
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'findstr /C:"Hotel Room Booking" index.html'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to local folder...'
                // Create a deployment folder outside the current workspace to avoid cyclic errors
                bat 'if not exist C:\\RoomBooking_Deploy mkdir C:\\RoomBooking_Deploy'
                bat 'xcopy /y /s * C:\\RoomBooking_Deploy\\'
            }
        }
    }
}
