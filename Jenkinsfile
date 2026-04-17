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
                // 'dir' is the Windows version of 'ls'
                bat 'dir' 
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // 'findstr' is the Windows version of 'grep'
                bat 'findstr /C:"Hotel Room Booking" index.html'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to local folder...'
                // Windows commands to create folder and copy files
                bat 'if not exist deploy mkdir deploy'
                bat 'xcopy /y /s * deploy\\'
            }
        }
    }
}
