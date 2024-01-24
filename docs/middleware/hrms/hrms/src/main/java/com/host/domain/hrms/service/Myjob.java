package com.host.domain.hrms.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component
public class Myjob {
	@Scheduled(cron = "0/6 0 0 ? * * *")
	public void run() {
		System.out.println("run");
	}
}
