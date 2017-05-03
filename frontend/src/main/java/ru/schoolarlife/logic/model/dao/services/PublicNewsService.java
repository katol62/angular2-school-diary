package ru.schoolarlife.logic.model.dao.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.schoolarlife.logic.bo.unsecure.PublicNews;
import ru.schoolarlife.logic.model.dao.repositories.unsecure.PublicNewsRepository;

import java.util.List;

/**
 * Created by victor on 03.05.17.
 */
@Service
public class PublicNewsService {

    @Autowired
    PublicNewsRepository publicNewsRepository;

    public List<PublicNews> getAllPublicNews()
    {
        return publicNewsRepository.findAll();
    }

    public PublicNews getOne(Long id)
    {
        return publicNewsRepository.findOne(id);
    }

    public PublicNews save(PublicNews publicNews)
    {
        return publicNewsRepository.save(publicNews);
    }

    public void delete(Long id)
    {
        publicNewsRepository.delete(id);
    }
}
