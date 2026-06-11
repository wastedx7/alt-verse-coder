-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` CHAR(60) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `User_email_idx`(`email`),
    INDEX `User_username_idx`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Problem` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `difficulty` ENUM('EASY', 'MEDIUM', 'HARD') NOT NULL,
    `description` LONGTEXT NOT NULL,
    `constraints` TEXT NULL,
    `tags` JSON NULL,
    `companies` JSON NULL,
    `hints` JSON NULL,
    `editorial` LONGTEXT NULL,
    `function_signature` JSON NOT NULL,
    `starter_code` JSON NOT NULL,
    `is_published` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Problem_slug_key`(`slug`),
    INDEX `Problem_difficulty_idx`(`difficulty`),
    INDEX `Problem_slug_idx`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TestCase` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `problem_id` INTEGER UNSIGNED NOT NULL,
    `input_json` JSON NOT NULL,
    `expected_output` JSON NOT NULL,
    `is_hidden` BOOLEAN NOT NULL DEFAULT false,
    `ordering` INTEGER NOT NULL DEFAULT 0,

    INDEX `TestCase_problem_id_idx`(`problem_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Submission` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `problem_id` INTEGER UNSIGNED NOT NULL,
    `language` ENUM('JAVA', 'PYTHON', 'CPP', 'JAVASCRIPT') NOT NULL,
    `source_code` LONGTEXT NOT NULL,
    `verdict` ENUM('PENDING', 'ACCEPTED', 'WRONG_ANSWER', 'TIME_LIMIT_EXCEEDED', 'MEMORY_LIMIT_EXCEEDED', 'RUNTIME_ERROR', 'COMPILE_ERROR') NOT NULL DEFAULT 'PENDING',
    `runtime_ms` INTEGER NULL,
    `memory_kb` INTEGER UNSIGNED NULL,
    `error_output` TEXT NULL,
    `submitted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Submission_user_id_problem_id_idx`(`user_id`, `problem_id`),
    INDEX `Submission_submitted_at_idx`(`submitted_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserProgress` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `problem_id` INTEGER UNSIGNED NOT NULL,
    `solved` BOOLEAN NOT NULL DEFAULT false,
    `attempts` INTEGER NOT NULL DEFAULT 0,
    `last_submission` DATETIME(3) NULL,

    UNIQUE INDEX `UserProgress_user_id_problem_id_key`(`user_id`, `problem_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TestCase` ADD CONSTRAINT `TestCase_problem_id_fkey` FOREIGN KEY (`problem_id`) REFERENCES `Problem`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Submission` ADD CONSTRAINT `Submission_problem_id_fkey` FOREIGN KEY (`problem_id`) REFERENCES `Problem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProgress` ADD CONSTRAINT `UserProgress_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProgress` ADD CONSTRAINT `UserProgress_problem_id_fkey` FOREIGN KEY (`problem_id`) REFERENCES `Problem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
